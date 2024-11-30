<?php

namespace App\Filament\Resources\VillageConnectionResource\Pages;

use App\Filament\Resources\VillageConnectionResource;
use Filament\Actions;
use Filament\Resources\Pages\ListRecords;

class ListVillageConnections extends ListRecords
{
    protected static string $resource = VillageConnectionResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\CreateAction::make(),
        ];
    }
}
