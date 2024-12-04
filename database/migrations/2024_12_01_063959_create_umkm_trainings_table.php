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
            $table->foreignId('created_by')->constrained('id')->on('users')->onDelete('set null');
            $table->string('image')->nullable();
            $table->unsignedBigInteger('created_by')->nullable()->change();
        });
    }

    public function down()
    {
        Schema::dropIfExists('umkm_trainings');
        Schema::dropForeign(['created_by']);
        Schema::dropColumn('created_by');
        }
}
