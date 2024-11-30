<?php

namespace App\Filament\Resources;

use App\Filament\Resources\VillageConnectionResource\Pages;
use App\Models\VillageConnection;
use Filament\Forms;
use Filament\Resources\Form;
use Filament\Resources\Resource;
use Filament\Resources\Table;
use Filament\Tables;

class VillageConnectionResource extends Resource
{
    protected static ?string $model = VillageConnection::class;

    protected static ?string $navigationIcon = 'heroicon-o-link';

    public static function form(Forms\Form $form): Forms\Form
    {
        return $form
            ->schema([
                Forms\Components\TextInput::make('village_name')->required(),
                Forms\Components\TextInput::make('region')->required(),
                Forms\Components\TextInput::make('contact_person')->required(),
                Forms\Components\TextInput::make('contact_number')->required(),
                Forms\Components\Textarea::make('program_details')->required(),
                Forms\Components\Select::make('created_by')
                    ->relationship('createdBy', 'name')
                    ->required(),
            ]);
    }

    public static function table(Tables\Table $table): Tables\Table
    {
        return $table
            ->columns([
                Tables\Columns\TextColumn::make('village_name')->sortable()->searchable(),
                Tables\Columns\TextColumn::make('region')->sortable()->searchable(),
                Tables\Columns\TextColumn::make('contact_person'),
                Tables\Columns\TextColumn::make('contact_number'),
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
            'index' => Pages\ListVillageConnections::route('/'),
            'create' => Pages\CreateVillageConnection::route('/create'),
            'edit' => Pages\EditVillageConnection::route('/{record}/edit'),
        ];
    }
}
