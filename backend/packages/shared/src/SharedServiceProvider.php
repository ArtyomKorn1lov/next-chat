<?php

namespace Package\Shared;

use Spatie\LaravelPackageTools\Package;
use Spatie\LaravelPackageTools\PackageServiceProvider;

class SharedServiceProvider extends PackageServiceProvider
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
            ->name('shared-user')
            ->hasConfigFile()
            ->discoversMigrations()
            ->runsMigrations();
    }
}
