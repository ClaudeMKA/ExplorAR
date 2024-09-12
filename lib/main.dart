import 'package:flutter/material.dart';
import 'screens/home_screen.dart';

void main() {
  runApp(ExplorARApp());
}

class ExplorARApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'ExplorAR',
      theme: ThemeData(
        primarySwatch: Colors.blue,
      ),
      home: HomeScreen(),
    );
  }
}
