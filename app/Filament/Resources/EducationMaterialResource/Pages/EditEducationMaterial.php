<?php

namespace App\Filament\Resources\EducationMaterialResource\Pages;

use App\Filament\Resources\EducationMaterialResource;
use Filament\Actions;
use Filament\Resources\Pages\EditRecord;

class EditEducationMaterial extends EditRecord
{
    protected static string $resource = EducationMaterialResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\DeleteAction::make(),
        ];
    }
}
