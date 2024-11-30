<?php

namespace App\Filament\Resources;

use App\Filament\Resources\EducationMaterialResource\Pages;
use App\Models\EducationMaterial;
use Filament\Resources\Resource;
use Filament\Resources\Forms\Form;
use Filament\Resources\Tables\Table;
use Filament\Tables;
use Filament\Forms;

class EducationMaterialResource extends Resource
{
    protected static ?string $model = EducationMaterial::class;
    protected static ?string $navigationIcon = 'heroicon-o-book-open';

    public static function form(Forms\Form $form): Forms\Form
    {
        return $form
            ->schema([
                Forms\Components\TextInput::make('title')->required(),
                Forms\Components\Textarea::make('description'),
                Forms\Components\RichEditor::make('content'),
                Forms\Components\TextInput::make('image_url'),
                Forms\Components\Select::make('created_by')
                    ->relationship('user', 'name')
                    ->required(),
            ]);
    }

    public static function table(Tables\Table $table): Tables\Table
    {
        return $table
            ->columns([
                Tables\Columns\TextColumn::make('title'),
                Tables\Columns\TextColumn::make('description')->limit(50),
                Tables\Columns\TextColumn::make('user.name')->label('Created By'),
                Tables\Columns\TextColumn::make('created_at')->dateTime(),
            ])
            ->filters([]);
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListEducationMaterials::route('/'),
            'create' => Pages\CreateEducationMaterial::route('/create'),
            'edit' => Pages\EditEducationMaterial::route('/{record}/edit'),
        ];
    }
}
