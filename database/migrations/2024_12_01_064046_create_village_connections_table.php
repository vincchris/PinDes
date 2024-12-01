<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateVillageConnectionsTable extends Migration
{
    public function up()
    {
        Schema::create('village_connections', function (Blueprint $table) {
            $table->id();
            $table->string('village_name');
            $table->string('region');
            $table->string('contact_person');
            $table->string('contact_number');
            $table->text('program_details');
            $table->timestamps();
            $table->foreignId('created_by')->constrained('users')->onDelete('cascade');
        });
    }

    public function down()
    {
        Schema::dropIfExists('village_connections');
    }
}
