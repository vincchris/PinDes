<?php

namespace App\Filament\Resources\VillageConnectionResource\Pages;

use App\Filament\Resources\VillageConnectionResource;
use Filament\Actions;
use Filament\Resources\Pages\EditRecord;

class EditVillageConnection extends EditRecord
{
    protected static string $resource = VillageConnectionResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\DeleteAction::make(),
        ];
    }
}
