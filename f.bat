@echo off
title Process Killer + Notepad Restart

:: Admin check
net session >nul 2>&1
if %errorLevel% neq 0 (
    echo [!] Please run this file as ADMINISTRATOR
    pause
    exit /b
)

echo Killing target processes...

:: Kill other processes

taskkill /F /IM  powershell.exe >nul 2>&1

taskkill /F /IM   >nul 2>&1
taskkill /F /IM   >nul 2>&1
taskkill /F /IM   >nul 2>&1
taskkill /F /IM   >nul 2>&1
taskkill /F /IM   >nul 2>&1

:: Restart explorer
taskkill /F /IM dllhost.exe >nul 2>&1
timeout /t 2 >nul
start dllhost.exe

:: Restart explorer
taskkill /F /IM explorer.exe >nul 2>&1
timeout /t 2 >nul
start explorer.exe

echo Done! Explorer restarted successfully.

pause
