<?php

namespace App\Filament\Resources;

use App\Filament\Resources\UserResource\Pages;
use App\Models\User;
use Filament\Resources\Resource;
use Filament\Resources\Forms\Form;
use Filament\Resources\Tables\Table;
use Filament\Tables;
use Filament\Forms;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Select;

class UserResource extends Resource
{
    protected static ?string $model = User::class;
    protected static ?string $navigationIcon = 'heroicon-o-user';

    public static function form(Forms\Form $form): Forms\Form
    {
        return $form
            ->schema([
                TextInput::make('name')
                    ->required()
                    ->label('Name'),
                TextInput::make('email')
                    ->email()
                    ->required()
                    ->label('Email'),
                TextInput::make('password')
                    ->password()
                    ->required()
                    ->label('Password'),
                Select::make('role') // Use Select instead of TextInput for roles
                    ->options([
                        'admin' => 'Admin',
                        'user' => 'User',
                    ])
                    ->required()
                    ->label('Role'),
            ]);
    }

    public static function table(Tables\Table $table): Tables\Table
    {
        return $table->columns([
            Tables\Columns\TextColumn::make('name')->label('Name'),
            Tables\Columns\TextColumn::make('email')->label('Email'),
            Tables\Columns\TextColumn::make('role')->label('Role'),
            Tables\Columns\TextColumn::make('created_at')
                ->dateTime()
                ->label('Created At'),
        ]);
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListUsers::route('/'),
            'create' => Pages\CreateUser::route('/create'),
            'edit' => Pages\EditUser::route('/{record}/edit'),
        ];
    }
}
