import { OneToOne, OneToMany, Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, DeleteDateColumn } from 'typeorm';
import { Auth } from '../../auth/entity/auth.entity';
import { Bookmarks } from '../../bookmarks/entity/bookmarks.entity';
@Entity()
export class Users {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ unique: true })
    name: string;

    @CreateDateColumn()
    createAt: Date;

    @UpdateDateColumn()
    updateAt: Date;

    @UpdateDateColumn()
    lastLoginAt: Date;

    @DeleteDateColumn()
    deleteAt: Date;

    @OneToMany(() => Bookmarks, (bookmark) => bookmark.job)
    bookmarks: Bookmarks[];

    // 양방향 관계 설정
    @OneToOne(() => Auth, (auth) => auth.user)
    auth: Auth;
}