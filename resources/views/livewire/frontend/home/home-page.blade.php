<div>

    <div class="w-full">
        <!-- navbar -->
        <nav
            class="max-w-screen-sm flex justify-evenly items-center mx-auto py-2 rounded-2xl  shadow-sm shadow-black/20 my-5 border border-black/20">
            <div>
                <a href="{{ route('home') }}">
                    <img src="/logo.png" alt="Logo" class="h-10">
                </a>
            </div>
            <ul class="flex space-x-6 text-sm">
                <li>
                    <a href="{{ route('home') }}" wire:navigate class="hover:text-blue-700 transition-colors">Home</a>
                </li>
                <li>
                    <a href="#services" class="hover:text-blue-700 transition-colors">Services</a>
                </li>
                <li>
                    <a href="#projects" class="hover:text-blue-700 transition-colors">Projects</a>
                </li>
                <li>
                    <a href="#testimonials" class="hover:text-blue-700 transition-colors">Testimonials</a>
                </li>
            </ul>
            <div class="flex space-x-4 justify-between items-center">
                <a href="{{ route('login') }}" wire:navigate
                    class="border border-black text-black p-1.5 text-sm rounded-full hover:bg-black hover:text-white transition-all">
                    Sign in
                </a>

                <a href="{{ route('contact') }}" wire:navigate
                    class="relative inline-flex items-center justify-center px-3 py-2 text-sm rounded-2xl text-white font-medium  bg-gradient-to-b from-blue-400 to-blue-600 shadow-md hover:shadow-blue-500/40 hover:shadow-lg hover:scale-105 transition">
                    Get a Quote
                    <span
                        class="absolute inset-x-0 top-0 h-1/2 rounded-t-full bg-gradient-to-b from-white/60 to-transparent pointer-events-none"></span>
                </a>
            </div>

        </nav>

        <!-- hero -->
        <div class="max-w-screen-sm flex flex-col justify-evenly items-center mx-auto py-2 rounded-2xl mt-20">
            <div class="flex flex-col justify-center items-center space-y-8">
                <h1 class="flex flex-col justify-center items-center font-semibold text-6xl space-y-4 text-center">
                    Transform Your Vision
                    <br>
                    Into Digital Reality
                </h1>

                <span
                    class="flex flex-col justify-center items-center  text-lg text-gray-400 font-medium space-y-4 text-center">
                    I craft elegant web solutions that drive results <br>
                    from stunning designs to powerful development
                </span>
            </div>

            <div class="flex space-x-4 justify-between items-center mt-10">
                <a href="#projects"
                    class="relative inline-flex items-center justify-center px-4 py-3 text-lg rounded-2xl text-white font-medium  bg-gradient-to-b from-blue-400 to-blue-600 shadow-md hover:shadow-blue-500/40 hover:shadow-lg hover:scale-105 transition">
                    View My Work
                    <span
                        class="absolute inset-x-0 top-0 h-1/2 rounded-t-full bg-gradient-to-b from-white/60 to-transparent pointer-events-none"></span>
                </a>
                <a href="{{ route('contact') }}" wire:navigate
                    class="border border-black text-black px-4 py-3  text-lg rounded-full hover:bg-black hover:text-white transition-all">
                    Get In Touch
                </a>


            </div>

        </div>

    </div>
</div>