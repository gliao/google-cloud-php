<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: google/cloud/iot/v1/resources.proto

namespace Google\Cloud\Iot\V1;

/**
 * Indicates whether an MQTT connection is enabled or disabled. See the field
 * description for details.
 *
 * Protobuf type <code>google.cloud.iot.v1.MqttState</code>
 */
class MqttState
{
    /**
     * No MQTT state specified. If not specified, MQTT will be enabled by default.
     *
     * Generated from protobuf enum <code>MQTT_STATE_UNSPECIFIED = 0;</code>
     */
    const MQTT_STATE_UNSPECIFIED = 0;
    /**
     * Enables a MQTT connection.
     *
     * Generated from protobuf enum <code>MQTT_ENABLED = 1;</code>
     */
    const MQTT_ENABLED = 1;
    /**
     * Disables a MQTT connection.
     *
     * Generated from protobuf enum <code>MQTT_DISABLED = 2;</code>
     */
    const MQTT_DISABLED = 2;
}

