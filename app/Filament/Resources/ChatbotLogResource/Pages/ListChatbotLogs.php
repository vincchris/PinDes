<?php

namespace App\Filament\Resources\ChatbotLogResource\Pages;

use App\Filament\Resources\ChatbotLogResource;
use Filament\Actions;
use Filament\Resources\Pages\ListRecords;

class ListChatbotLogs extends ListRecords
{
    protected static string $resource = ChatbotLogResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\CreateAction::make(),
        ];
    }
}
