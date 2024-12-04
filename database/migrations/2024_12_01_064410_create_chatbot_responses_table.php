<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateChatbotResponsesTable extends Migration
{
    public function up()
    {
        Schema::create('chatbot_responses', function (Blueprint $table) {
            $table->id();
            $table->string('keyword');
            $table->text('response_text');
            $table->timestamps();

            // Add a column to store the reference to chatbot_logs table
            $table->unsignedBigInteger('chatbot_logs_id')->nullable(); // Change the name of the column

            // Define foreign key constraint
            $table->foreign('chatbot_logs_id')->references('id')->on('chatbot_logs')->onDelete('cascade');
        });
    }

    public function down()
    {
        Schema::dropIfExists('chatbot_responses');
    }
}
