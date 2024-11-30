<?php

namespace App\Filament\Resources\ChatbotResponseResource\Pages;

use App\Filament\Resources\ChatbotResponseResource;
use Filament\Actions;
use Filament\Resources\Pages\ListRecords;

class ListChatbotResponses extends ListRecords
{
    protected static string $resource = ChatbotResponseResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\CreateAction::make(),
        ];
    }
}
