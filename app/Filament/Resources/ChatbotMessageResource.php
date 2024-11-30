<?php

namespace App\Filament\Resources;

use App\Filament\Resources\ChatbotMessageResource\Pages;
use App\Models\ChatbotMessage;
use Filament\Forms;
use Filament\Resources\Form;
use Filament\Resources\Resource;
use Filament\Resources\Table;
use Filament\Tables;

class ChatbotMessageResource extends Resource
{
    protected static ?string $model = ChatbotMessage::class;

    protected static ?string $navigationIcon = 'heroicon-o-chat-bubble-left-right';

    public static function form(Forms\Form $form): Forms\Form
    {
        return $form
            ->schema([
                Forms\Components\Select::make('session_id')
                    ->relationship('session', 'id')
                    ->required(),
                Forms\Components\Select::make('sender')
                    ->options([
                        'user' => 'User',
                        'bot' => 'Bot',
                    ])
                    ->required(),
                Forms\Components\Textarea::make('message_content')->required(),
                Forms\Components\DateTimePicker::make('timestamp')->required(),
            ]);
    }

    public static function table(Tables\Table $table): Tables\Table
    {
        return $table
            ->columns([
                Tables\Columns\TextColumn::make('session.id')->label('Session ID')->sortable(),
                Tables\Columns\BadgeColumn::make('sender')
                    ->colors([
                        'success' => 'user',
                        'secondary' => 'bot',
                    ]),
                Tables\Columns\TextColumn::make('message_content')->limit(50)->searchable(),
                Tables\Columns\TextColumn::make('timestamp')->dateTime(),
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
            'index' => Pages\ListChatbotMessages::route('/'),
            'create' => Pages\CreateChatbotMessage::route('/create'),
            'edit' => Pages\EditChatbotMessage::route('/{record}/edit'),
        ];
    }
}
