<?php

namespace App\Filament\Resources\TelemedicineSessionResource\Pages;

use App\Filament\Resources\TelemedicineSessionResource;
use Filament\Actions;
use Filament\Resources\Pages\EditRecord;

class EditTelemedicineSession extends EditRecord
{
    protected static string $resource = TelemedicineSessionResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\DeleteAction::make(),
        ];
    }
}
