import { Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';

// router
@Controller('movies')
export class MoviesController {

    @Get()
    getAll(){
        return  "this woll return all movies"
    }

    @Get("/:id")
    getOne(@Param("id") movieId: string){
        return `this will return one movie with the id: ${movieId}`
    }

    @Post()
    create(){
        return 'this will create a movie'
    }

    @Delete("/:id")
    remove(@Param('id') movieId:string){
        return `this will delete a movie with the id: ${movieId}`
    }

    @Put("/:id")
    patch(@Param('id') movieId: string){
        return `this will patch a movie with the id: ${movieId}`
    }
}
