<?php

namespace Package\Chat;

use Spatie\LaravelPackageTools\Package;
use Spatie\LaravelPackageTools\PackageServiceProvider;

class ChatServiceProvider extends PackageServiceProvider
{
    public function register(): void
    {
    }

    public function boot(): void
    {
    }

    public function configurePackage(Package $package): void
    {
        $package
            ->name('package-chat')
            ->hasRoute('api')
            ->hasConfigFile()
            ->discoversMigrations()
            ->runsMigrations();
    }
}
