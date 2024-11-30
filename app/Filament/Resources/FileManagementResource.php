<?php

namespace App\Filament\Resources;

use App\Filament\Resources\FileManagementResource\Pages;
use App\Models\FileManagement;
use Filament\Forms;
use Filament\Resources\Form;
use Filament\Resources\Resource;
use Filament\Resources\Table;
use Filament\Tables;

class FileManagementResource extends Resource
{
    protected static ?string $model = FileManagement::class;

    protected static ?string $navigationIcon = 'heroicon-o-folder';

    public static function form(Forms\Form $form): Forms\Form
    {
        return $form
            ->schema([
                Forms\Components\TextInput::make('file_name')->required(),
                Forms\Components\TextInput::make('file_path')->required(),
                Forms\Components\Select::make('uploaded_by')
                    ->relationship('user', 'name')
                    ->required(),
            ]);
    }

    public static function table(Tables\Table $table): Tables\Table
    {
        return $table
            ->columns([
                Tables\Columns\TextColumn::make('file_name')->searchable(),
                Tables\Columns\TextColumn::make('file_path'),
                Tables\Columns\TextColumn::make('user.name')->label('Uploaded By')->sortable(),
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
            'index' => Pages\ListFileManagement::route('/'),
            'create' => Pages\CreateFileManagement::route('/create'),
            'edit' => Pages\EditFileManagement::route('/{record}/edit'),
        ];
    }
}
