<?php

namespace Package\User;

use Spatie\LaravelPackageTools\Package;
use Spatie\LaravelPackageTools\PackageServiceProvider;

class UserServiceProvider extends PackageServiceProvider
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
            ->name('package-user')
            ->hasConfigFile()
            ->discoversMigrations()
            ->runsMigrations();
    }
}
