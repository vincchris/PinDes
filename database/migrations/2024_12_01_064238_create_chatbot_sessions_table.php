<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateChatbotSessionsTable extends Migration
{
    public function up()
    {
        Schema::create('chatbot_sessions', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('user_id');  
            $table->timestamp('session_start');
            $table->timestamp('session_end')->nullable();
            $table->enum('status', ['active', 'inactive', 'completed', 'error']);
            $table->timestamps();

            // Add foreign key constraint for user_id
            $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
        });
    }

    public function down()
    {
        Schema::dropIfExists('chatbot_sessions');
    }
}
