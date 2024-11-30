<?php

namespace App\Filament\Resources;

use App\Filament\Resources\ChatbotResponseResource\Pages;
use App\Models\ChatbotResponse;
use Filament\Forms;
use Filament\Resources\Form;
use Filament\Resources\Resource;
use Filament\Resources\Table;
use Filament\Tables;

class ChatbotResponseResource extends Resource
{
    protected static ?string $model = ChatbotResponse::class;

    protected static ?string $navigationIcon = 'heroicon-o-chat-bubble-oval-left-ellipsis';

    public static function form(Forms\Form $form): Forms\Form
    {
        return $form
            ->schema([
                Forms\Components\TextInput::make('keyword')->required(),
                Forms\Components\Textarea::make('response_text')->required(),
                Forms\Components\Select::make('used_in_log')
                    ->relationship('log', 'id')
                    ->label('Log ID'),
            ]);
    }

    public static function table(Tables\Table $table): Tables\Table
    {
        return $table
            ->columns([
                Tables\Columns\TextColumn::make('keyword')->sortable()->searchable(),
                Tables\Columns\TextColumn::make('response_text')->limit(50)->searchable(),
                Tables\Columns\TextColumn::make('log.id')->label('Log ID'),
                Tables\Columns\TextColumn::make('created_at')->dateTime(),
            ])
            ->filters([]);
    }

    public static function getRelations(): array
    {
        return [];
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListChatbotResponses::route('/'),
            'create' => Pages\CreateChatbotResponse::route('/create'),
            'edit' => Pages\EditChatbotResponse::route('/{record}/edit'),
        ];
    }
}
