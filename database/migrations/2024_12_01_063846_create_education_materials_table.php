<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateEducationMaterialsTable extends Migration
{
    public function up()
    {
        Schema::create('education_materials', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->text('description');
            $table->text('content');
            $table->string('image_url')->nullable();
            $table->timestamps();
            $table->foreignId('created_by')->constrained('users')->onDelete('cascade');
        });
    }

    public function down()
    {
        Schema::dropIfExists('education_materials');
    }
}
