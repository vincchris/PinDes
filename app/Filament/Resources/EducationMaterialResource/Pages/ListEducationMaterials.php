<?php

namespace App\Filament\Resources\EducationMaterialResource\Pages;

use App\Filament\Resources\EducationMaterialResource;
use Filament\Actions;
use Filament\Resources\Pages\ListRecords;

class ListEducationMaterials extends ListRecords
{
    protected static string $resource = EducationMaterialResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\CreateAction::make(),
        ];
    }
}
