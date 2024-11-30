<?php

namespace App\Filament\Resources;

use App\Filament\Resources\ChatbotSessionResource\Pages;
use App\Models\ChatbotSession;
use Filament\Forms;
use Filament\Resources\Form;
use Filament\Resources\Resource;
use Filament\Resources\Table;
use Filament\Tables;

class ChatbotSessionResource extends Resource
{
    protected static ?string $model = ChatbotSession::class;

    protected static ?string $navigationIcon = 'heroicon-o-chat-bubble-bottom-center-text';

    public static function form(Forms\Form $form): Forms\Form
    {
        return $form
            ->schema([
                Forms\Components\Select::make('user_id')
                    ->relationship('user', 'name')
                    ->required(),
                Forms\Components\DateTimePicker::make('session_start')->required(),
                Forms\Components\DateTimePicker::make('session_end'),
                Forms\Components\Select::make('status')
                    ->options([
                        'active' => 'Active',
                        'inactive' => 'Inactive',
                        'completed' => 'Completed',
                        'error' => 'Error',
                    ])
                    ->required(),
            ]);
    }

    public static function table(Tables\Table $table): Tables\Table
    {
        return $table
            ->columns([
                Tables\Columns\TextColumn::make('user.name')->label('User')->sortable()->searchable(),
                Tables\Columns\TextColumn::make('session_start')->dateTime(),
                Tables\Columns\TextColumn::make('session_end')->dateTime(),
                Tables\Columns\BadgeColumn::make('status')->colors([
                    'success' => 'completed',
                    'warning' => 'active',
                    'secondary' => 'inactive',
                    'danger' => 'error',
                ]),
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
            'index' => Pages\ListChatbotSessions::route('/'),
            'create' => Pages\CreateChatbotSession::route('/create'),
            'edit' => Pages\EditChatbotSession::route('/{record}/edit'),
        ];
    }
}
