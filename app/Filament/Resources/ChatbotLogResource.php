<?php

namespace App\Filament\Resources;

use App\Filament\Resources\ChatbotLogResource\Pages;
use App\Models\ChatbotLog;
use Filament\Forms;
use Filament\Resources\Form;
use Filament\Resources\Resource;
use Filament\Resources\Table;
use Filament\Tables;

class ChatbotLogResource extends Resource
{
    protected static ?string $model = ChatbotLog::class;

    protected static ?string $navigationIcon = 'heroicon-o-document';

    public static function form(Forms\Form $form): Forms\Form
    {
        return $form
            ->schema([
                Forms\Components\Select::make('session_id')
                    ->relationship('session', 'id')
                    ->required(),
                Forms\Components\TextInput::make('event_type')->required(),
                Forms\Components\Textarea::make('log_details')->required(),
            ]);
    }

    public static function table(Tables\Table $table): Tables\Table
    {
        return $table
            ->columns([
                Tables\Columns\TextColumn::make('session.id')->label('Session ID')->sortable(),
                Tables\Columns\TextColumn::make('event_type')->sortable()->searchable(),
                Tables\Columns\TextColumn::make('log_details')->limit(50)->searchable(),
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
            'index' => Pages\ListChatbotLogs::route('/'),
            'create' => Pages\CreateChatbotLog::route('/create'),
            'edit' => Pages\EditChatbotLog::route('/{record}/edit'),
        ];
    }
}
