<?php

namespace App\Filament\Resources\FileManagementResource\Pages;

use App\Filament\Resources\FileManagementResource;
use Filament\Actions;
use Filament\Resources\Pages\ListRecords;

class ListFileManagement extends ListRecords
{
    protected static string $resource = FileManagementResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\CreateAction::make(),
        ];
    }
}
