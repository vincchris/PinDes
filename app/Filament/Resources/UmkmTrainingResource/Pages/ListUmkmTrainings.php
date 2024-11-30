<?php

namespace App\Filament\Resources\UmkmTrainingResource\Pages;

use App\Filament\Resources\UmkmTrainingResource;
use Filament\Actions;
use Filament\Resources\Pages\ListRecords;

class ListUmkmTrainings extends ListRecords
{
    protected static string $resource = UmkmTrainingResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\CreateAction::make(),
        ];
    }
}
