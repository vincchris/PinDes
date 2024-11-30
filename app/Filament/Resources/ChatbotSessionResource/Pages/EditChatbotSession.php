<?php

namespace App\Filament\Resources\ChatbotSessionResource\Pages;

use App\Filament\Resources\ChatbotSessionResource;
use Filament\Actions;
use Filament\Resources\Pages\EditRecord;

class EditChatbotSession extends EditRecord
{
    protected static string $resource = ChatbotSessionResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\DeleteAction::make(),
        ];
    }
}
