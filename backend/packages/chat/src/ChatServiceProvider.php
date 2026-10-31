<?php

namespace Package\Chat;

use Spatie\LaravelPackageTools\Package;
use Spatie\LaravelPackageTools\PackageServiceProvider;

class ChatServiceProvider extends PackageServiceProvider
{
    public function packageRegistered(): void
    {
    }

    public function packageBooted(): void
    {
    }

    public function configurePackage(Package $package): void
    {
        $package
            ->name('chat')
            ->hasRoute('api')
            ->hasConfigFile()
            ->discoversMigrations()
            ->runsMigrations();
    }
}
