<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: google/pubsub/v1/pubsub.proto

namespace Google\Cloud\PubSub\V1;

use Google\Protobuf\Internal\GPBType;
use Google\Protobuf\Internal\RepeatedField;
use Google\Protobuf\Internal\GPBUtil;

/**
 * Response for the `StreamingPull` method. This response is used to stream
 * messages from the server to the client.
 *
 * Generated from protobuf message <code>google.pubsub.v1.StreamingPullResponse</code>
 */
class StreamingPullResponse extends \Google\Protobuf\Internal\Message
{
    /**
     * Received Pub/Sub messages. This will not be empty.
     *
     * Generated from protobuf field <code>repeated .google.pubsub.v1.ReceivedMessage received_messages = 1;</code>
     */
    private $received_messages;

    public function __construct() {
        \GPBMetadata\Google\Pubsub\V1\Pubsub::initOnce();
        parent::__construct();
    }

    /**
     * Received Pub/Sub messages. This will not be empty.
     *
     * Generated from protobuf field <code>repeated .google.pubsub.v1.ReceivedMessage received_messages = 1;</code>
     * @return \Google\Protobuf\Internal\RepeatedField
     */
    public function getReceivedMessages()
    {
        return $this->received_messages;
    }

    /**
     * Received Pub/Sub messages. This will not be empty.
     *
     * Generated from protobuf field <code>repeated .google.pubsub.v1.ReceivedMessage received_messages = 1;</code>
     * @param \Google\Cloud\PubSub\V1\ReceivedMessage[]|\Google\Protobuf\Internal\RepeatedField $var
     * @return $this
     */
    public function setReceivedMessages($var)
    {
        $arr = GPBUtil::checkRepeatedField($var, \Google\Protobuf\Internal\GPBType::MESSAGE, \Google\Cloud\PubSub\V1\ReceivedMessage::class);
        $this->received_messages = $arr;

        return $this;
    }

}
