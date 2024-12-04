<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateChatbotLogsTable extends Migration
{
    public function up()
    {
        Schema::create('chatbot_logs', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('session_id'); 
            $table->string('event_type');
            $table->text('log_details');
            $table->timestamps();

            $table->foreign('session_id')
                ->references('id')
                ->on('chatbot_sessions')
                ->onDelete('cascade'); 
        });
    }

    public function down()
    {
        Schema::dropIfExists('chatbot_logs');
    }
}
