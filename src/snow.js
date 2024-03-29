(function () {
    // FIXME Для версии для слабовищящих:
    // .bvi-body #particle_canvas { display: none !important; }

    // Полотно для рисования
    const body = document.querySelector('body')
    const elem = document.createElement('canvas')
    elem.id = 'particle_canvas'
    elem.style.display = 'block'
    elem.style.position = 'fixed'
    elem.style.left = '0'
    elem.style.top = '0'
    elem.style.right = '0'
    elem.style.bottom = '0'
    elem.style.width = '100%'
    elem.style.height = '100%'
    elem.style.pointerEvents = 'none'
    elem.style.zIndex = '-9999999'
    body.appendChild(elem)

    // Композитный Объект "Снег"
    var jsCanvasSnow = {
        availableChars: 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+-*/=%#@&$()?!<>'.split(''),
        canvas: null,
        ctx: null,
        particles: [],
        running: false,
        snowcolor: 'rgba(172,229,238,.7)',
        snowfont: 'DH_snowflakeskimberle',

        start_time: 0,
        frame_time: 0,

        init() {
            // use the container width and height
            this.canvas = document.getElementById('particle_canvas')
            this.ctx = this.canvas.getContext('2d')
            this.resize(window.innerWidth, window.innerHeight)

            // change these values
            // the 2 element arrays represent min and max values
            if (this.snowfont) {
                this.pAmount = 78 // amount of particles
                this.pSize = [14, 28] // min and max size
                this.pSwing = [0.1, 1] // min and max oscilation speed for x movement
                this.pSpeed = [40, 100] // min and max y speed
                this.pAmplitude = [25, 50] // min and max distance for x movement
            } else {
                this.pAmount = 5000 // amount of particles
                this.pSize = [0.5, 1.5] // min and max size
                this.pSwing = [0.1, 1] // min and max oscilation speed for x movement
                this.pSpeed = [40, 100] // min and max y speed
                this.pAmplitude = [25, 50] // min and max distance for x movement
            }

            this._init_particles()
        },

        start() {
            this.running = true
            this.start_time = this.frame_time = microtime()
            this._loop()
        },

        stop() {
            this.running = false
        },

        resize(w, h) {
            this.canvas.width = w
            this.canvas.height = h
        },

        _loop() {
            if (jsCanvasSnow.running) {
                jsCanvasSnow._clear()
                jsCanvasSnow._update()
                jsCanvasSnow._draw()
                jsCanvasSnow._queue()
            }
        },

        _init_particles() {
            // clear the particles array
            this.particles.length = 0

            for (let i = 0; i < this.pAmount; i++) {
                const origin = new Vector2(frand(0, this.canvas.width), frand(-this.canvas.height, 0))
                const velocity = new Vector2(frand(this.pSwing[0], this.pSwing[1]), frand(this.pSpeed[0], this.pSpeed[1]))
                const size = frand(this.pSize[0], this.pSize[1])
                const amplitude = frand(this.pAmplitude[0], this.pAmplitude[1])
                let randChar = this.availableChars[i % this.availableChars.length]
                this.particles.push(new jsParticle(origin, velocity, size, amplitude, randChar))
            }
        },

        _update() {
            // calculate the time since the last frame
            const now_time = microtime()
            const delta_time = now_time - this.frame_time

            for (let i = 0; i < this.particles.length; i++) {
                const particle = this.particles[i]
                particle.update(delta_time)

                if (particle.position.y - particle.size > this.canvas.height) {
                    // reset the particle to the top and a random x position
                    particle.position.y = -particle.size
                    particle.position.x = particle.origin.x = Math.random() * this.canvas.width
                    particle.dx = Math.random() * 100
                }
            }

            // save this time for the next frame
            this.frame_time = now_time
        },

        _draw() {
            this.ctx.fillStyle = this.snowcolor

            for (let i = 0; i < this.particles.length; i++) {
                const particle = this.particles[i]
                if (this.snowfont) {
                    this.ctx.font = particle.size + 'px ' + this.snowfont
                    this.ctx.fillText(particle.char, particle.position.x, particle.position.y)
                } else {
                    this.ctx.fillRect(particle.position.x, particle.position.y, particle.size, particle.size)
                }
            }
        },

        _clear() {
            this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
        },

        _queue() {
            window.requestAnimationFrame(jsCanvasSnow._loop)
        },
    }

    function jsParticle(origin, velocity, size, amplitude, char) {
        this.origin = origin
        this.position = new Vector2(origin.x, origin.y)
        this.velocity = velocity || new Vector2(0, 0)
        this.size = size
        this.amplitude = amplitude
        this.char = char

        // randomize start values a bit
        this.dx = Math.random() * 100

        this.update = function (delta_time) {
            this.position.y += this.velocity.y * delta_time

            // oscilate the x value between -amplitude and +amplitude
            this.dx += this.velocity.x * delta_time
            this.position.x = this.origin.x + (this.amplitude * Math.sin(this.dx))
        }
    }

    function microtime() {
        return new Date().getTime() * 0.001
    }

    // returns a random integer from min to max
    function irand(min, max) {
        return Math.floor((min || 0) + Math.random() * ((max + 1 || 100) - (min || 0)))
    }

    // returns a random float from min to max
    function frand(min, max) {
        return (min || 0) + Math.random() * ((max || 1) - (min || 0))
    }

    function clamp(value, min, max) {
        return Math.min(Math.max(value, min), max)
    }

    // Two component vector class
    function Vector2(x, y) {
        this.x = x || 0
        this.y = y || 0

        this.add = function (other) {
            this.x += other.x
            this.y += other.y
        }

        this.magnitude = function () {
            return Math.sqrt(this.x * this.x + this.y * this.y)
        }
    }

    function Color(r, g, b) {
        this.r = r || 0
        this.g = g || 0
        this.b = b || 0
    }

    // Точка входа
    window.addEventListener('resize', function () {
        jsCanvasSnow.resize(window.innerWidth, window.innerHeight)
    }, false)

    jsCanvasSnow.init()
    jsCanvasSnow.start()
})()
