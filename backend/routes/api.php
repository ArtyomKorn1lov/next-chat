<?php

use Package\Chat\Presentation\Controllers\MessageController\MessageController;
use Illuminate\Support\Facades\Route;

Route::get('/message', MessageController::class);
