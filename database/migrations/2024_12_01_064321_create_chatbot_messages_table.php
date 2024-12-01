<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateChatbotMessagesTable extends Migration
{
    public function up()
    {
        Schema::create('chatbot_messages', function (Blueprint $table) {
            $table->id();
            $table->foreignId('session_id')->constrained('chatbot_sessions')->onDelete('cascade');
            $table->enum('sender', ['user', 'bot']);
            $table->text('message_content');
            $table->timestamp('timestamp')->useCurrent();
        });
    }

    public function down()
    {
        Schema::dropIfExists('chatbot_messages');
    }
}
