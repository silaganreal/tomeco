<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;
use Inertia\Response;

class UserController extends Controller
{
    public function index(): Response {
        return Inertia::render('user/Dashboard');
    }

    public function violations(): Response {
        $violations = DB::table('tomecoui_violation')->get();
        return Inertia::render('user/Violations', [
            'violations' => $violations
        ]);
    }
}
