<?php

namespace App\Filament\Resources\TelemedicineSessionResource\Pages;

use App\Filament\Resources\TelemedicineSessionResource;
use Filament\Actions;
use Filament\Resources\Pages\ListRecords;

class ListTelemedicineSessions extends ListRecords
{
    protected static string $resource = TelemedicineSessionResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\CreateAction::make(),
        ];
    }
}
