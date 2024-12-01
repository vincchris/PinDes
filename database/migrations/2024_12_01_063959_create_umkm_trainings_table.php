<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUmkmTrainingsTable extends Migration
{
    public function up()
    {
        Schema::create('umkm_trainings', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->text('description');
            $table->text('content');
            $table->date('date');
            $table->timestamps();
            $table->foreignId('created_by')->constrained('users')->onDelete('cascade');
            $table->string('image')->nullable();
        });
    }

    public function down()
    {
        Schema::dropIfExists('umkm_trainings');
        
        Schema::table('umkm_trainings', function (Blueprint $table) {
            $table->dropColumn('image'); 
        });
    }
}
