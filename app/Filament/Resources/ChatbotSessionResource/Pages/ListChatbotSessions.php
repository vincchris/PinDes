<?php

namespace App\Filament\Resources\ChatbotSessionResource\Pages;

use App\Filament\Resources\ChatbotSessionResource;
use Filament\Actions;
use Filament\Resources\Pages\ListRecords;

class ListChatbotSessions extends ListRecords
{
    protected static string $resource = ChatbotSessionResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\CreateAction::make(),
        ];
    }
}
