let z = 100, id = 0;
const wins = new Map();
const desktop = document.getElementById('desktop');
const tasks = document.getElementById('tasks');
const startMenu = document.getElementById('startMenu');

// overlay blur background
let overlay = document.createElement('div');
overlay.id = 'overlay';
overlay.style.position = 'fixed';
overlay.style.top = '0';
overlay.style.left = '0';
overlay.style.right = '0';
overlay.style.bottom = '0';
overlay.style.background = 'rgba(0,0,0,0.3)';
overlay.style.backdropFilter = 'blur(4px)';
overlay.style.zIndex = '200';
overlay.style.display = 'none';
document.body.appendChild(overlay);

// click overlay to close Start Menu
overlay.addEventListener('click', () => toggleStart(false));

class Win {
    constructor(title, content) {
        this.id = 'w' + (++id);
        this.title = title;

        this.color = `hsl(${Math.floor(Math.random()*360)},70%,50%)`;

        const w = document.createElement('div');
        w.className = 'win';
        w.style.left = (60 + id * 20) + 'px';
        w.style.top = (80 + id * 20) + 'px';
        w.style.opacity = "0.7";
        w.innerHTML = `
      <div class="titlebar" style="background:${this.color}">
        <div class="title">${title}</div>
        <div class="controls">
          <button class="btn min">—</button>
          <button class="btn max">▢</button>
          <button class="btn close">✕</button>
        </div>
      </div>
      <div class="content">${content}</div>
      <div class="resizer"></div>`;
        desktop.appendChild(w);

        this.el = w;
        this.createTask();
        this.bind();
        this.focus();
        wins.set(this.id, this);
    }

    bind() {
        const self = this;
        const titlebar = this.el.querySelector('.titlebar');

        function startDrag(e) {
            if (e.target.closest('.btn')) return;
            self.focus();

            let ox = e.clientX || (e.touches && e.touches[0].clientX);
            let oy = e.clientY || (e.touches && e.touches[0].clientY);
            let ol = parseInt(self.el.style.left), ot = parseInt(self.el.style.top);

            function move(ev) {
                let cx = ev.clientX || (ev.touches && ev.touches[0].clientX);
                let cy = ev.clientY || (ev.touches && ev.touches[0].clientY);
                self.el.style.left = (ol + cx - ox) + 'px';
                self.el.style.top = (ot + cy - oy) + 'px';
            }
            function stop() {
                window.removeEventListener('mousemove', move);
                window.removeEventListener('mouseup', stop);
                window.removeEventListener('touchmove', move);
                window.removeEventListener('touchend', stop);
            }
            window.addEventListener('mousemove', move);
            window.addEventListener('mouseup', stop);
            window.addEventListener('touchmove', move, { passive: false });
            window.addEventListener('touchend', stop);
        }

        titlebar.addEventListener('mousedown', startDrag);
        titlebar.addEventListener('touchstart', startDrag, { passive: false });

        titlebar.addEventListener('dblclick', function (e) {
            if (!e.target.closest('.btn')) self.toggleMax();
        });

        const resizer = this.el.querySelector('.resizer');
        function startResize(e) {
            let ow = self.el.offsetWidth, oh = self.el.offsetHeight;
            let ox = e.clientX || (e.touches && e.touches[0].clientX);
            let oy = e.clientY || (e.touches && e.touches[0].clientY);

            function move(ev) {
                let cx = ev.clientX || (ev.touches && ev.touches[0].clientX);
                let cy = ev.clientY || (ev.touches && ev.touches[0].clientY);
                self.el.style.width = (ow + cx - ox) + 'px';
                self.el.style.height = (oh + cy - oy) + 'px';
            }
            function stop() {
                window.removeEventListener('mousemove', move);
                window.removeEventListener('mouseup', stop);
                window.removeEventListener('touchmove', move);
                window.removeEventListener('touchend', stop);
            }
            window.addEventListener('mousemove', move);
            window.addEventListener('mouseup', stop);
            window.addEventListener('touchmove', move, { passive: false });
            window.addEventListener('touchend', stop);
        }
        resizer.addEventListener('mousedown', startResize);
        resizer.addEventListener('touchstart', startResize, { passive: false });

        this.el.querySelector('.min').onclick = () => self.minimize();
        this.el.querySelector('.max').onclick = () => self.toggleMax();
        this.el.querySelector('.close').onclick = () => self.close();
    }

    createTask() {
        this.task = document.createElement('div');
        this.task.className = 'task';
        this.task.innerHTML = `<div class="task-icon" style="background:${this.color}">${this.title[0]}</div>`;
        this.task.onclick = () => {
            if (this.el.style.display === 'none') this.restore();
            else this.focus();
        };
        tasks.appendChild(this.task);
    }

    focus() {
        wins.forEach(w => {
            w.el.style.opacity = "0.7";
            w.task.classList.remove('active');
        });

        z++;
        this.el.style.zIndex = z;
        this.el.style.display = 'flex';
        this.el.style.opacity = "1";
        this.task.classList.add('active');
    }

    minimize() {
        this.el.style.display = 'none';
        this.task.classList.remove('active');
    }

    restore() {
        this.el.style.display = 'flex';
        this.focus();
    }

    toggleMax() {
        this.el.classList.toggle('maximized');
    }

    close() {
        this.el.remove();
        this.task.remove();
        wins.delete(this.id);
    }
}

function openApp(title) {
    if (title === 'Weather') {
        new Win(title, `
            <div style="padding:10px; color:#fff">
                <h3>Weather (Hà Nội)</h3>
                <iframe src="https://wttr.in/Hanoi?format=v2" style="width:100%;height:auto;border:none;background:#111;color:#fff"></iframe>
                <p>Nếu không hiển thị, hãy mở <a href='https://wttr.in/Hanoi' target='_blank' style='color:lightblue'>wttr.in/Hanoi</a></p>
            </div>
        `);
    } else {
        new Win(title, `<p>${title} content here...</p>`);
    }
}

['File Manager', 'Control Panel', 'Package Center', 'Notes', 'Gallery', 'Music', 'Weather']
    .forEach(app => {
        const tile = document.createElement('div');
        tile.className = 'app-tile';
        tile.innerHTML = `<div class="app-icon">${app[0]}</div><div class="app-name">${app}</div>`;
        tile.onclick = () => { openApp(app); toggleStart(false); }
        document.getElementById('appsGrid').appendChild(tile);
    });

function toggleStart(show) {
    const menu = document.getElementById('startMenu');
    const willShow = show !== undefined ? show : !menu.classList.contains('show');
    if (willShow) {
        z++;
        overlay.style.display = 'block';
        overlay.style.zIndex = z;
        z++;
        menu.style.zIndex = z; // đảm bảo menu luôn trên overlay
    } else {
        overlay.style.display = 'none';
    }
    menu.classList.toggle('show', willShow);
}
document.getElementById('startBtn').onclick = () => toggleStart();
document.addEventListener('click', e => {
    if (!e.target.closest('.start-menu') && !e.target.closest('#startBtn')) toggleStart(false);
});