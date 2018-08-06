// consoleApp.cpp : Defines the entry point for the console application.
//

#include "stdafx.h"
#include <iostream>

#if defined(UNICODE) || defined(_UNICODE)
#define tcout std::wcout
#else
#define tcout std::cout
#endif

int _tmain(int argc, TCHAR* argv[])
{
	if (argc == 2)
	{
		tcout << "Hello " << argv[1];
		return 0;
	}
	tcout << "Hello world";
    return 0;
}

