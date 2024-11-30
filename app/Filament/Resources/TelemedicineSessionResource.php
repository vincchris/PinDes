<?php

namespace App\Filament\Resources;

use App\Filament\Resources\TelemedicineSessionResource\Pages;
use App\Models\TelemedicineSession;
use Filament\Forms;
use Filament\Resources\Form;
use Filament\Resources\Resource;
use Filament\Resources\Table;
use Filament\Tables;

class TelemedicineSessionResource extends Resource
{
    protected static ?string $model = TelemedicineSession::class;

    protected static ?string $navigationIcon = 'heroicon-o-heart';

    public static function form(Forms\Form $form): Forms\Form
    {
        return $form
            ->schema([
                Forms\Components\Select::make('user_id')
                    ->relationship('user', 'name')
                    ->required(),
                Forms\Components\DateTimePicker::make('appointment_time')->required(),
                Forms\Components\Select::make('status')
                    ->options([
                        'scheduled' => 'Scheduled',
                        'completed' => 'Completed',
                        'canceled' => 'Canceled',
                        'no-show' => 'No Show',
                    ])
                    ->required(),
            ]);
    }

    public static function table(Tables\Table $table): Tables\Table
    {
        return $table
            ->columns([
                Tables\Columns\TextColumn::make('user.name')->label('User')->sortable()->searchable(),
                Tables\Columns\TextColumn::make('appointment_time')->dateTime(),
                Tables\Columns\BadgeColumn::make('status')->colors([
                    'success' => 'completed',
                    'warning' => 'scheduled',
                    'danger' => 'canceled',
                    'secondary' => 'no-show',
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
            'index' => Pages\ListTelemedicineSessions::route('/'),
            'create' => Pages\CreateTelemedicineSession::route('/create'),
            'edit' => Pages\EditTelemedicineSession::route('/{record}/edit'),
        ];
    }
}
