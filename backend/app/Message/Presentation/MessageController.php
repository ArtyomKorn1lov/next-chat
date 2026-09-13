<?php

namespace App\Message\Presentation;

use App\Core\Presentation\Controllers\Controller;
use Illuminate\Http\JsonResponse;

class MessageController extends Controller
{
    public function __invoke(): JsonResponse
    {
        return response()->json([
            'message' => 'Success',
        ]);
    }
}
