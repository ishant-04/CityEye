"use client";

import React, { useRef } from "react";
import { Button } from "@components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@components/ui/card";
import { Input } from "@components/ui/input";
import { Label } from "@components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@components/ui/select";
export default function Register() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const next = useRef();
  return (
    <div className="min-h-screen flex justify-center items-center">
      <Tabs defaultValue="account" className="w-[400px]">
        <form onSubmit={handleSubmit}>
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="account">User Details</TabsTrigger>
            <TabsTrigger ref={next} value="password">
              Camera Specs
            </TabsTrigger>
          </TabsList>
          <TabsContent value="account">
            <Card>
              <CardHeader>
                <CardTitle>Register</CardTitle>
                <CardDescription>
                  Enter your personal details here
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="space-y-1">
                  <Label htmlFor="name">Full Name</Label>
                  <Input id="name" placeholder="name" />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="username">Phone No</Label>
                  <Input
                    id="username"
                    type="text"
                    placeholder="10 digit mobile number"
                    pattern="\d*"
                  />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="address">Address</Label>
                  <Input id="address" type="text" placeholder="Address" />
                </div>
              </CardContent>
              <CardFooter>
                <CardDescription>
                  Please go to next section to give the camera details
                </CardDescription>
              </CardFooter>
            </Card>
          </TabsContent>
          <TabsContent value="password">
            <Card>
              <CardHeader>
                <CardTitle>Camera Specifications</CardTitle>
                <CardDescription>
                  Please give your camera specifications here
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex gap-5 text-center items-center">
                  <Label htmlFor="lat">Lattitude: </Label>
                  <Input id="lat" />
                  <Label htmlFor="long">Longitude: </Label>
                  <Input id="long" />
                </div>
                <div className="space-y-1">
                  <Select defaultValue="480p">
                    <SelectTrigger>
                      <SelectValue />
                      <SelectContent>
                        <SelectItem value="360p or below">
                          360p or below
                        </SelectItem>
                        <SelectItem value="480p">480p</SelectItem>
                        <SelectItem value="720p">720p</SelectItem>
                        <SelectItem value="1080p or more">
                          1080p or more
                        </SelectItem>
                      </SelectContent>
                    </SelectTrigger>
                  </Select>
                </div>
                <div className="space-y-1">
                  <Label htmlFor="model">Model</Label>
                  <Input id="model" type="text" placeholder="Camera model" />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="capacity">Recording Capacity</Label>
                  <Input id="capacity" type="text" placeholder="no of days" />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="fov">Field of View</Label>
                  <Input id="fov" type="text" placeholder="Field of View" />
                </div>
                <div className="space-y-1">
                  <CardDescription>Camera Orientation</CardDescription>
                  <Select defaultValue="north">
                    <SelectTrigger>
                      <SelectValue placeholder="orientation"/>
                      <SelectContent>
                        <SelectItem value="north">North</SelectItem>
                        <SelectItem value="north-east">North-East</SelectItem>
                        <SelectItem value="east">East</SelectItem>
                        <SelectItem value="south-east">South-East</SelectItem>
                        <SelectItem value="south">South</SelectItem>
                        <SelectItem value="west-south">West-South</SelectItem>
                        <SelectItem value="west">West</SelectItem>
                        <SelectItem value="north-west">North-West</SelectItem>
                      </SelectContent>
                    </SelectTrigger>
                  </Select>
                </div>
              </CardContent>
              <CardFooter>
                <Button type="submit">Register</Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </form>
      </Tabs>
    </div>
  );
}
