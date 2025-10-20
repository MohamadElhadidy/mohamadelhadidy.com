<?php

namespace App\Livewire\Frontend\Home;

use Livewire\Attributes\Title;
use Livewire\Component;

class HomePage extends Component
{
    #[Title('Mohamad Elhadidy - Home')]
    public function render()
    {
        return view('livewire.frontend.home.home-page');
    }
}
