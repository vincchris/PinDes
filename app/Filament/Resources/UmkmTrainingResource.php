<?php

namespace App\Filament\Resources;

use App\Filament\Resources\UmkmTrainingResource\Pages;
use App\Models\UmkmTraining;
use Filament\Forms;
use Filament\Resources\Form;
use Filament\Resources\Resource;
use Filament\Resources\Table;
use Filament\Tables;

class UmkmTrainingResource extends Resource
{
    protected static ?string $model = UmkmTraining::class;

    protected static ?string $navigationIcon = 'heroicon-o-clipboard';

    public static function form(Forms\Form $form): Forms\Form
    {
        return $form
            ->schema([
                Forms\Components\TextInput::make('title')->required(),
                Forms\Components\Textarea::make('description')->required(),
                Forms\Components\RichEditor::make('content')->required(),
                Forms\Components\DatePicker::make('date')->required(),
                Forms\Components\FileUpload::make('image') // Tambahkan komponen untuk upload gambar
                    ->image() // Memastikan hanya menerima file gambar
                    ->directory('umkm-trainings/images') // Lokasi penyimpanan gambar
                    ->required(), // Bersifat wajib
            ]);
    }

    public static function table(Tables\Table $table): Tables\Table
    {
        return $table
            ->columns([
                Tables\Columns\TextColumn::make('title')->sortable()->searchable(),
                Tables\Columns\TextColumn::make('description')->limit(50),
                Tables\Columns\TextColumn::make('date')->date(),
                Tables\Columns\TextColumn::make('created_at')->dateTime(),
                Tables\Columns\ImageColumn::make('image') // Tampilkan kolom gambar di tabel
                    ->disk('public') // Disk yang digunakan untuk penyimpanan
                    ->label('Image'),
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
            'index' => Pages\ListUmkmTrainings::route('/'),
            'create' => Pages\CreateUmkmTraining::route('/create'),
            'edit' => Pages\EditUmkmTraining::route('/{record}/edit'),
        ];
    }
}
