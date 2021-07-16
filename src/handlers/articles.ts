import express, { Request, Response } from 'express'
import { Article, ArticleStore } from '../models/article'

const store = new ArticleStore()

// handler functions here


const articleRoutes = (app: express.Application) => {
  // Express routes here
}

export default articleRoutes