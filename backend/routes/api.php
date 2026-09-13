<?php

use App\Message\Presentation\MessageController;
use Illuminate\Support\Facades\Route;

Route::get('/message', MessageController::class);
