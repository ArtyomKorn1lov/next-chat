<?php

namespace Package\Chat\Presentation\Controllers\MessageController;

use Packages\Package\Shared\Controllers\Controller;
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
